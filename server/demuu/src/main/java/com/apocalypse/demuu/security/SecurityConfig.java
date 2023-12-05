package com.apocalypse.demuu.security;

import com.apocalypse.demuu.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {
    @Autowired
    MemberService memberService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .mvcMatchers("/css/**", "/js/**", "/img/**").permitAll()
                .mvcMatchers("/", "/members/**", "/item/**", "/images/**", "/mail/**").permitAll()
//                .mvcMatchers("/admin/**").hasRole("ADMIN")// /admin으로 시작하는 경로는 해당 계정이 ADMIN Role일 경우에만 접근 가능하도록 설정
                .anyRequest().authenticated()
                .and()
                .csrf().ignoringAntMatchers("/mail/**"); // csrf disable 설정

        return http.build();
    }
}
