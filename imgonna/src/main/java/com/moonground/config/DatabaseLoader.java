package com.moonground.config;

import com.moonground.domain.User;
import com.moonground.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

  private final UserRepository repository;

  public DatabaseLoader(UserRepository repository) {
    this.repository = repository;
  }

  @Override
  public void run(String... args) throws Exception {
    this.repository.save(new User("email", "password", "username"));
  }
}
