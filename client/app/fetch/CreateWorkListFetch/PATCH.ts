import axios from "axios";

//보드 수정
export async function EditBoard(memberId: number, boardId: number) {
  try {
    const returnData = await axios.patch(`/${memberId}/kanban/${boardId}`);
    return returnData;
  } catch (err) {
    return err;
  }
}

// 카테고리 수정
export async function EditCategory(boardId: number, CategoryId: number) {
  try {
    const returnData = await axios.patch(
      `/kanban/${boardId}/kanban/${CategoryId}`,
    );
    return returnData;
  } catch (err) {
    return err;
  }
}

// 테스크 수정
export async function EditTask(
  CategoryId: number,
  taskId: number,
  status: string,
) {
  try {
    const returnData = await axios.patch(
      `/kanban/${CategoryId}/task/${taskId}/${status}`,
    );
    return returnData;
  } catch (err) {
    return err;
  }
}
