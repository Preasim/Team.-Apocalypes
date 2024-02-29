import axios from "axios";

// 보드(전체)조회

export async function BoardSearch(memberId: number) {
  try {
    const BoardData = await axios.get(`/${memberId}/kanban`);
    return BoardData;
  } catch (err) {
    return err;
  }
}
// 카테고리 검색
export async function CategorySearch(BoardId: number) {
  try {
    axios.get(`/kanban/${BoardId}`);
  } catch (err) {
    return err;
  }
}
//테스크 검색
export async function TaskSearch(categoryId: number) {
  try {
    const TaskData = await axios.get(`/kanban${categoryId}/task`);
    return TaskData;
  } catch (err) {
    return err;
  }
}
