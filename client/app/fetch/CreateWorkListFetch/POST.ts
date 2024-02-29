import axios from "axios";

// 보드 생성 api
export async function CreateBoard(memberId: number) {
  try {
    const returnData = await axios.post(`/${memberId}/kanban`);
    return returnData;
  } catch (err) {
    return err;
  }
}

//카테고리 생성 api

export async function CreateCategory(boardId: number) {
  try {
    const returnData = await axios.post(`/kanban/${boardId}`);
    return returnData;
  } catch (err) {
    return err;
  }
}

// 칸반보드 작업 생성

export async function CreateTask(categoryId: number, status: string) {
  try {
    const returnData = await axios.post(`/kanban/${categoryId}/task/${status}`);
    return returnData;
  } catch (err) {
    return err;
  }
}
