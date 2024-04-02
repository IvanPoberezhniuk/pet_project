"use client";

import { Todo, edit, remove, selectTodos } from "@/lib/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

const styles = {
  edit: {
    color: "blue",
    opacity: 0.5,
    fontWeight: 600,
    "&:hover": {
      opacity: 1,
      cursor: "pointer",
    },
  },
  remove: {
    color: "red",
    opacity: 0.5,
    fontWeight: 600,
    "&:hover": {
      opacity: 1,
      cursor: "pointer",
    },
  },
};

export default function QuotesPage() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  return (
    <>
      <h1>TODO page</h1>
      {todos.map(({ id, name, completed }: Todo) => (
        <Stack
        key={id}
          sx={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box>{name}</Box>
          <Box>{completed.toString()}</Box>
          <Box sx={styles.edit} onClick={() => dispatch(edit({ name: "pidor" }))}>
            EDIT
          </Box>
          <Box
            sx={styles.remove}
            onClick={() => dispatch(remove(id))}
          >
            DELETE
          </Box>
        </Stack>
      ))}
    </>
  );
}
