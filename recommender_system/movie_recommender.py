import numpy as np
import pandas
import json


def get_recommendations(title, cosine_sim, indices, movies_df):
    idx = (
        indices.loc[indices["original_title"] == title]["index"]).to_numpy()[0]
    similarity_scores = list(enumerate(cosine_sim[idx]))
    similarity_scores = sorted(similarity_scores,
                               key=lambda x: x[1],
                               reverse=True)
    similarity_scores = similarity_scores[1:11]
    # (a, b) where a is id of movie, b is similarity_scores
    movies_indices = [ind[0] for ind in similarity_scores]
    movies = movies_df["original_title"].iloc[movies_indices]
    return [name for name in movies]


def movie_by_name(name):
    cosine_sim = np.load("static/movies_cosine_sim.npy")
    title_to_movie_index = pandas.read_csv("static/title_to_idx.csv")
    movies_df = pandas.read_csv("static/movies_merged.csv")
    recommendations = get_recommendations(name, cosine_sim,
                                          title_to_movie_index, movies_df)

    recommendations_json = json.dumps(recommendations)

    return recommendations_json
