package com.apocalypse.demuu.service;

import com.apocalypse.demuu.entity.Member;
import com.apocalypse.demuu.exception.BusinessLogicException;
import com.apocalypse.demuu.exception.ExceptionCode;
import com.apocalypse.demuu.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@AllArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member createMember(Member member) {
        verifyExistEmail(member.getEmail());
        Member savedMember = memberRepository.save(member);
        return savedMember;
    }


//    public Member uploadImage(long memberId, MultipartFile imageFile) {
//        Member member = findVerifiedMember(memberId);
//        String fileUrl =
//    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(
                page, size, Sort.by("memberId").descending()));
    }

    @Transactional
    public Member updateMemberName(Member member) {
//        if (loginId != member.getMemberId()) throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);

        Member findMember = findVerifiedMember(member.getMemberId());
        findMember.setName(member.getName());
        return findMember;
    }

    public Member updateActiveStatus(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        findMember.setStatus(Member.Status.MEMBER_ACTIVE);
        return findMember;
    }

    // 유저 탈퇴
    public Member updateDeleteStatus(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        findMember.setStatus(Member.Status.MEMBER_DELETE);
        return findMember;
    }

    // 테스트용으로만 사용
    public void deleteMember(Long loginId, long memberId) {
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }


    // 존재하는 이매일이 있으면 존재하는 회원이라고 예외처리
    private void verifyExistEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    // 존재하는 회원인지 검색
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member member = optionalMember.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)
        );
        return member;
    }
}