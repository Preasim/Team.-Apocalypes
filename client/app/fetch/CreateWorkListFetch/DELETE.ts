import axios from "axios";

//보드 삭제

export async function DeleteBoard(memberId: number, boardId: number) {
  try {
    const retrunData = await axios.delete(`/${memberId}/kanban/${boardId}`);
    return retrunData;
  } catch (err) {
    return err;
  }
}

export async function DeleteCategory(boardId: number, categoryId: number) {
  try {
    const returnData = await axios.delete(`/kanban/${boardId}/${categoryId}`);
    return returnData;
  } catch (err) {
    return err;
  }
}

export async function DeleteTask(categoryId: number, taskId: number) {
  try {
    const returnData = await axios.delete(
      `/kanban/${categoryId}/task/${taskId}`,
    );
    return returnData;
  } catch (err) {
    return err;
  }
}
