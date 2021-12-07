import React from "react";
import { Flex } from "@chakra-ui/react";

const TrendingMusic = ({ title, list }) => {
  return (
    <div style={{ fontSize: "20px" }}>
      <h2>{title}</h2>
      <Flex flexWrap="wrap" justifyContent="center">
        {list?.map((item, index) => (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mr="24"
            mt="12"
            w={800}
          >
            <li style={{ listStyle: "none" }}>
              {`${index + 1}. ` + item.name}
            </li>
            <p>
              Times played: {item.playcount} <br /> Number of listeners:{" "}
              {item.listeners} <br /> See more on{" "}
              <a href={item.url}>{item.name}</a>
              <hr />
            </p>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default TrendingMusic;
