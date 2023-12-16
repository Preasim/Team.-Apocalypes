package com.apocalypse.demuu.member;

import com.apocalypse.demuu.controller.MemberController;
import com.apocalypse.demuu.dto.MemberDto;
import com.apocalypse.demuu.entity.Member;
import com.apocalypse.demuu.mapper.MemberMapper;
import com.apocalypse.demuu.service.MemberService;
import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

import static com.apocalypse.demuu.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.apocalypse.demuu.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberMapper mapper;

    @Test
    void postMemberTest() throws Exception {
        MemberDto.PostDto post = new MemberDto.PostDto("Demuu","demuu@example.com","testpassword");
        String content = gson.toJson(post);

        given(mapper.postToMember(Mockito.any(MemberDto.PostDto.class))).willReturn(new Member());

        Member mockResultMember = new Member();
        mockResultMember.setMemberId(1L);
        given(memberService.createMember(Mockito.any(Member.class))).willReturn(mockResultMember);

        ResultActions actions = mockMvc.perform(
                post("/members/signup")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        actions.andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/members/1"))))
                .andDo(document(
                        "post-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
                                )
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        )
                ));
    }

    @Test
    public void getMemberTest() throws Exception {
        long memberId = 1L;
        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
        MemberDto.ResponseDto response = new MemberDto.ResponseDto(
                1L,
                "Demuu",
                "demuu@example.com",
                "test1234",
                "null",
                "null",
                Member.Status.MEMBER_ACTIVE,
                time,
                time
        );

        given(memberService.findMember(Mockito.anyLong())).willReturn(new Member());
        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(response);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.get("/members/{member-id}", memberId)
                        .accept(MediaType.APPLICATION_JSON));

        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.memberId").value(memberId))
                .andExpect(jsonPath("$.data.name").value(response.getName()))
                .andDo(
                        document("get-member",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                pathParameters(List.of(parameterWithName("member-id").description("회원 식별자 ID"))),
                                responseFields(List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터").optional(),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data.password").type(JsonFieldType.STRING).description("비밀번호"),
                                        fieldWithPath("data.memberCode").type(JsonFieldType.STRING).description("유저 코드"),
                                        fieldWithPath("data.image").type(JsonFieldType.STRING).description("이미지"),
                                        fieldWithPath("data.status").type(JsonFieldType.STRING).description(""),
                                        fieldWithPath("data.status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성 시간"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
                                ))
                                ));

    }

    @Test
    public void getMembersTest() throws Exception {
        String page = "1";
        String size = "10";

        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
        Member member1 = new Member();
        member1.setMemberId(1L);
        member1.setName("Demuu1");
        member1.setEmail("demuu1@example.com");
        member1.setPassword("test1111");
        member1.setMemberCode("test1");
        member1.setImage("null");
        member1.setStatus(Member.Status.MEMBER_ACTIVE);
        member1.setCreatedAt(time);
        member1.setModifiedAt(time);

        Member member2 = new Member();
        member2.setMemberId(2L);
        member2.setName("Demuu2");
        member2.setEmail("demuu2@example.com");
        member2.setPassword("test2222");
        member2.setMemberCode("test2");
        member2.setImage("null");
        member2.setStatus(Member.Status.MEMBER_ACTIVE);
        member2.setCreatedAt(time);
        member2.setModifiedAt(time);

        Page<Member> members = new PageImpl<>(List.of(member1, member2),
                PageRequest.of(0, 10, Sort.by("memberId").descending()), 2);

        List<MemberDto.ResponseDto> responses = getMultiResponseBody();

        given(memberService.findMembers(Mockito.anyInt(), Mockito.anyInt())).willReturn(members);
        given(mapper.membersToResponses(Mockito.anyList())).willReturn(responses);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.get("/members")
                        .params(queryParams).accept(MediaType.APPLICATION_JSON));

        MvcResult result = actions.andExpect(status().isOk())
                .andDo(document("get-members",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(List.of(
                                parameterWithName("page").description("Page Number"),
                                parameterWithName("size").description("Page Size")
                        )),
                        responseFields(List.of(
                                fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과 데이터").optional(),
                                fieldWithPath("data[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                fieldWithPath("data[].name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("data[].email").type(JsonFieldType.STRING).description("이메일"),
                                fieldWithPath("data[].password").type(JsonFieldType.STRING).description("비밀번호"),
                                fieldWithPath("data[].memberCode").type(JsonFieldType.STRING).description("유저 코드"),
                                fieldWithPath("data[].image").type(JsonFieldType.STRING).description("이미지"),
                                fieldWithPath("data[].status").type(JsonFieldType.STRING).description(""),
                                fieldWithPath("data[].status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
                                fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("생성 시간"),
                                fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("수정 시간"),
                                fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
                                fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 건 수"),
                                fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수")
                                )
                        ))).andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");
        assertThat(list.size(), is(2));
    }

    @Test
    public void patchMemberNameTest() throws Exception {
        MemberDto.PatchDto patch = new MemberDto.PatchDto("Demuu");
        String content = gson.toJson(patch);

        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
        MemberDto.ResponseDto responseDto = new MemberDto.ResponseDto(
                1L, "Demuu", "demuu@example.com", "1234","null", "null",
                Member.Status.MEMBER_ACTIVE, time, time
        );

        given(mapper.patchToMember(Mockito.any(MemberDto.PatchDto.class))).willReturn(new Member());
        given(memberService.updateMemberName(Mockito.any(Member.class))).willReturn(new Member());
        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(responseDto);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.patch("/members/{member-id}", 1L)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.name").value(patch.getName()))
                .andDo(document("patch-member-name",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("member-id").description("회원 식별자")),
                        requestFields(List.of(
                                fieldWithPath("name").type(JsonFieldType.STRING).description("이름").optional()
                        )),
                        responseFields(List.of(
                                fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
                                fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                fieldWithPath("data.password").type(JsonFieldType.STRING).description("비밀번호"),
                                fieldWithPath("data.memberCode").type(JsonFieldType.STRING).description("유저 코드"),
                                fieldWithPath("data.image").type(JsonFieldType.STRING).description("이미지"),
                                fieldWithPath("data.status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
                                fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성 시간"),
                                fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
                        ))
                        ));
    }

    @Test
    public void patchStatusActive() throws Exception {
        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
        MemberDto.ResponseDto responseDto = new MemberDto.ResponseDto(
                1L, "Demuu", "demuu@example.com", "1234","null", "null",
                Member.Status.MEMBER_ACTIVE, time, time
        );

        given(memberService.updateActiveStatus(Mockito.anyLong())).willReturn(new Member());
        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(responseDto);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.patch("/members/status/active/{member-id}", 1L)
                        .accept(MediaType.APPLICATION_JSON)
        );

        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.status").value(responseDto.getStatus().toString()))
                .andDo(document("patch-status-active",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("member-id").description("회원 식별자")),
                        responseFields(List.of(
                                fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
                                fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                fieldWithPath("data.password").type(JsonFieldType.STRING).description("비밀번호"),
                                fieldWithPath("data.memberCode").type(JsonFieldType.STRING).description("유저 코드"),
                                fieldWithPath("data.image").type(JsonFieldType.STRING).description("이미지"),
                                fieldWithPath("data.status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
                                fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성 시간"),
                                fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
                        ))
                ));
    }

    @Test
    public void patchStatusDelete() throws Exception {
        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
        MemberDto.ResponseDto responseDto = new MemberDto.ResponseDto(
                1L, "Demuu", "demuu@example.com", "1234","null", "null",
                Member.Status.MEMBER_DELETE, time, time
        );

        given(memberService.updateDeleteStatus(Mockito.anyLong())).willReturn(new Member());
        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(responseDto);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.patch("/members/status/delete/{member-id}", 1L)
                        .accept(MediaType.APPLICATION_JSON)
        );

        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.status").value(responseDto.getStatus().toString()))
                .andDo(document("patch-status-delete",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("member-id").description("회원 식별자")),
                        responseFields(List.of(
                                fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
                                fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                fieldWithPath("data.password").type(JsonFieldType.STRING).description("비밀번호"),
                                fieldWithPath("data.memberCode").type(JsonFieldType.STRING).description("유저 코드"),
                                fieldWithPath("data.image").type(JsonFieldType.STRING).description("이미지"),
                                fieldWithPath("data.status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
                                fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성 시간"),
                                fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
                        ))
                ));
    }

    @Test
    public void deleteMember() throws Exception {
        long memberId = 1L;
        doNothing().when(memberService).deleteMember(Mockito.anyLong());

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.delete("/members/{member-id}", memberId)
        );

        actions.andExpect(status().isNoContent())
                .andDo(document(
                        "delete-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                Arrays.asList(parameterWithName("member-id").description("회원 식별자 ID"))
                        )
                ));
    }


    public static List<MemberDto.ResponseDto> getMultiResponseBody() {
        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
        return List.of(
                new MemberDto.ResponseDto(
                        1L,
                        "Demuu1",
                        "demuu1@example.com",
                        "test1111",
                        "test1",
                        "null",
                        Member.Status.MEMBER_ACTIVE,
                        time,
                        time
                ),
                new MemberDto.ResponseDto(
                        2L,
                        "Demuu2",
                        "demuu2@example.com",
                        "test2222",
                        "test2",
                        "null",
                        Member.Status.MEMBER_ACTIVE,
                        time,
                        time
                )
        );
    }
}
