package com.apocalypse.demuu.mapper;
import com.apocalypse.demuu.dto.MemberDto;
import com.apocalypse.demuu.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member postToMember(MemberDto.PostDto postDto);
    Member patchToMember(MemberDto.PatchDto patchDto);
    MemberDto.ResponseDto memberToResponse(Member member);
    List<MemberDto.ResponseDto> membersToResponses(List<Member> members);
}
