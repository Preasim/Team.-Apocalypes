//package com.apocalypse.demuu.member;
//
//import com.apocalypse.demuu.controller.MemberController;
//import com.apocalypse.demuu.dto.MemberDto;
//import com.apocalypse.demuu.entity.Member;
//import com.apocalypse.demuu.mapper.MemberMapper;
//import com.apocalypse.demuu.service.MemberService;
//import com.google.gson.Gson;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
//import org.springframework.restdocs.payload.JsonFieldType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.util.MultiValueMap;
//
//import java.sql.Timestamp;
//import java.util.List;
//
//import static com.apocalypse.demuu.util.ApiDocumentUtils.getRequestPreProcessor;
//import static com.apocalypse.demuu.util.ApiDocumentUtils.getResponsePreProcessor;
//import static org.hamcrest.Matchers.is;
//import static org.hamcrest.Matchers.startsWith;
//import static org.mockito.BDDMockito.given;
//import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
//import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
//import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@WebMvcTest(MemberController.class)
//@MockBean(JpaMetamodelMappingContext.class)
//@AutoConfigureRestDocs
//public class MemberControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    @MockBean
//    private MemberService memberService;
//
//    @MockBean
//    private MemberMapper mapper;
//
//    @Test
//    void postMemberTest() throws Exception {
//        MemberDto.PostDto post = new MemberDto.PostDto("Demuu","demuu@example.com","testpassword");
//        String content = gson.toJson(post);
//
//        given(mapper.postToMember(Mockito.any(MemberDto.PostDto.class))).willReturn(new Member());
//
//        Member mockResultMember = new Member();
//        mockResultMember.setMemberId(1L);
//        given(memberService.createMember(Mockito.any(Member.class))).willReturn(mockResultMember);
//
//        ResultActions actions = mockMvc.perform(
//                post("/members/signup")
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(content)
//        );
//
//        actions.andExpect(status().isCreated())
//                .andExpect(header().string("Location", is(startsWith("/members/1"))))
//                .andDo(document(
//                        "post-member",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
//                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
//                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
//                                )
//                        ),
//                        responseHeaders(
//                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
//                        )
//                ));
//    }
//
//    @Test
//    public void getMemberTest() throws Exception {
//        long memberId = 1L;
//        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
//        MemberDto.ResponseDto response = new MemberDto.ResponseDto(
//                1L,
//                "Demuu",
//                "demuu@example.com",
//                "test1234",
//                "null",
//                Member.Status.MEMBER_ACTIVE,
//                time,
//                time
//        );
//
//        given(memberService.findMember(Mockito.anyLong())).willReturn(new Member());
//        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(response);
//
//        ResultActions actions = mockMvc.perform(
//                RestDocumentationRequestBuilders.get("/members/{member-id}", memberId)
//                        .accept(MediaType.APPLICATION_JSON));
//
//        actions.andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.memberId").value(memberId))
//                .andExpect(jsonPath("$.data.name").value(response.getName()))
//                .andDo(
//                        document("get-member",
//                                getRequestPreProcessor(),
//                                getResponsePreProcessor(),
//                                pathParameters(List.of(parameterWithName("member-id").description("회원 식별자 ID"))),
//                                responseFields(List.of(
//                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터").optional(),
//                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
//                                        fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
//                                        fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
//                                        fieldWithPath("data.password").type(JsonFieldType.STRING).description("비밀번호"),
//                                        fieldWithPath("data.image").type(JsonFieldType.STRING).description("이미지"),
//                                        fieldWithPath("data.status").type(JsonFieldType.STRING).description(""),
//                                        fieldWithPath("data.status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
//                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성 시간"),
//                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
//                                ))
//                                ));
//
//    }
//
//    @Test
//    public void getMembersTest() throws Exception {
//        String page = "1";
//        String size = "10";
//
//        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
//        queryParams.add("page", page);
//        queryParams.add("size", size);
//
//        Member member1 = new Member();
//        member1.setName("Demuu1");
//        member1.setEmail("demuu1@example.com");
//        member1.setPassword("test1111");
//
//    }
//
//    @Test
//    public void patchMemberNameTest() throws Exception {
//        MemberDto.PatchDto patch = new MemberDto.PatchDto("Demuu");
//        String content = gson.toJson(patch);
//
//        Timestamp time = Timestamp.valueOf("2023-12-13 10:30:00");
//        MemberDto.ResponseDto responseDto = new MemberDto.ResponseDto(
//                1L, "Demuu", "demuu@example.com", "1234","null",
//                Member.Status.MEMBER_ACTIVE, time, time
//        );
//
//        given(mapper.patchToMember(Mockito.any(MemberDto.PatchDto.class))).willReturn(new Member());
//        given(memberService.updateMemberName(Mockito.any(Member.class))).willReturn(new Member());
//        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(responseDto);
//
//        ResultActions actions = mockMvc.perform(
//                RestDocumentationRequestBuilders.patch("/members/{member-id}", 1L)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(content)
//        );
//
//        actions.andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.name").value(patch.getName()))
//                .andDo(document("patch-member-name",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(parameterWithName("member-id").description("회원 식별자")),
//                        requestFields(List.of(
//                                fieldWithPath("name").type(JsonFieldType.STRING).description("이름").optional()
//                        )),
//                        responseFields(List.of(
//                                fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
//                                fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
//                                fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
//                                fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
//                                fieldWithPath("data.password").type(JsonFieldType.STRING).description("비밀번호"),
//                                fieldWithPath("data.image").type(JsonFieldType.STRING).description("이미지"),
//                                fieldWithPath("data.status").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 탈퇴 상태"),
//                                fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성 시간"),
//                                fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
//                        ))
//                        ));
//    }
//
//
//}
