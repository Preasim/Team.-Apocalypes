package com.apocalypse.demuu.repository;

import com.apocalypse.demuu.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
