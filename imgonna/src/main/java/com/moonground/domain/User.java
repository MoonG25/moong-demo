package com.moonground.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {

  private @Id String email;
  private String password;
  private String username;

  public User() {
  }

  public User(String email, String password, String username) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
