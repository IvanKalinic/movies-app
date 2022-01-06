from flask import Flask
from flask_cors import CORS

from movie_recommender import movie_by_name

app = Flask(__name__)
CORS(app)

@app.route('/movie/<movie>')
def recommend_movie(movie):
    return movie_by_name(movie)
