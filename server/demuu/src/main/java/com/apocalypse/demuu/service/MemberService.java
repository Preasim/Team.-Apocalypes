package com.apocalypse.demuu.service;

import com.apocalypse.demuu.entity.Member;
import com.apocalypse.demuu.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@AllArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member createMember(Member member) {

    }

    // 이메일 인증 번호 생성 로직
    private String generateVerificationCode() {
        return "123456";
    }

    public Member uploadImage(long memberId, MultipartFile imageFile) {

    }

    public Member findMember(long memberId) {

    }

    public Page<Member> findMembers(int page, int size) {

    }

    @Transactional
    public Member updateMember(Long loginId, Member member) {

    }

    public Member updateActiveStatus(long memberId) {

    }

    public void deleteMember(Long loginId, long memberId) {

    }


}
