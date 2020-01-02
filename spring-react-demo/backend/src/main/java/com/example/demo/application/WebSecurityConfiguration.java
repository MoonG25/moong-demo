package com.example.demo.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
  private PasswordEncoder passwordEncoder;

  @Autowired
  public WebSecurityConfiguration(PasswordEncoder passwordEncoder) {
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.csrf().disable()
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()

        // UI
        .antMatchers("/").permitAll()
        .antMatchers("/signin").permitAll()

        // Assets
        .antMatchers("/index.html").permitAll()
        .antMatchers("/static/**").permitAll()
        .antMatchers("*.png").permitAll()
        .antMatchers("*.ico").permitAll()
        .antMatchers("*.js").permitAll()
        .antMatchers("*.json").permitAll()

        // Auth
        .antMatchers("/api/v1/signin/in").permitAll()
        .antMatchers("/api/v1/signin/check").fullyAuthenticated()
        .antMatchers("/api/v1/signin/out").fullyAuthenticated()

        // User
//        .antMatchers("/api/v1/users/**").hasAuthority(TbkUserType.Admin.name)

        .anyRequest().authenticated()
        .and()

        .logout();
  }

//  @Override
//  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//    auth.authenticationProvider(new UserAuthenticationProvider(passwordEncoder));
//  }
}
