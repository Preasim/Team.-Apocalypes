package com.apocalypse.demuu.controller;

import com.apocalypse.demuu.dto.MemberDto;
import com.apocalypse.demuu.entity.Member;
import com.apocalypse.demuu.mapper.MemberMapper;
import com.apocalypse.demuu.response.MultiResponseDto;
import com.apocalypse.demuu.response.SingleResponseDto;
import com.apocalypse.demuu.service.MemberService;
import com.apocalypse.demuu.utils.UriCreator;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/members")
@AllArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.PostDto requestBody) {
        Member member = mapper.postToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri("/members", createdMember.getMemberId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member findMember = memberService.findMember(memberId);
        MemberDto.ResponseDto response = mapper.memberToResponse(findMember);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                     @Positive @RequestParam(value = "size", defaultValue = "20") int size) {
        Page<Member> pageMember = memberService.findMembers(page-1, size);
        List<Member> members = pageMember.getContent();
        List<MemberDto.ResponseDto> response = mapper.membersToResponses(members);

        return new ResponseEntity<>(new MultiResponseDto<>(response, pageMember), HttpStatus.OK);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMemberName(@PathVariable("member-id") @Positive long memberId,
                                          @Valid @RequestBody MemberDto.PatchDto requestBody) {
        Member member = mapper.patchToMember(requestBody);
        member.setMemberId(memberId);
        Member updatedMember = memberService.updateMemberName(member);
        MemberDto.ResponseDto response = mapper.memberToResponse(updatedMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PatchMapping("/status/active/{member-id}")
    public ResponseEntity patchStatusActive(@PathVariable("member-id") @Positive long memberId) {
        Member activeMember = memberService.updateActiveStatus(memberId);
        MemberDto.ResponseDto response = mapper.memberToResponse(activeMember);
        return new ResponseEntity<>((response), HttpStatus.OK);
    }

    @PatchMapping("/status/delete/{member-id}")
    public ResponseEntity patchStatusDelete(@PathVariable("member-id") @Positive long memberId) {
        Member deleteMember = memberService.updateDeleteStatus(memberId);
        MemberDto.ResponseDto response = mapper.memberToResponse(deleteMember);
        return new ResponseEntity<>((response), HttpStatus.OK);
    }
}
