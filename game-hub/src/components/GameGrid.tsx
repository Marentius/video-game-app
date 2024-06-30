import { Text } from "@chakra-ui/react";
import useGmaes from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGmaes();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
