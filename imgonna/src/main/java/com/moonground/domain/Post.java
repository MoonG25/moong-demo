package com.moonground.domain;

import java.util.Date;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Entity
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Size(min = 5, message = "5자 이상 써주세요")
  private String title;
  @Size(min = 10, message = "10자 이상 써주세요")
  private String body;
  private String author;
  private Date regDate;
  @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private Set<Comment> comments;

  public Post() {
  }

  @Builder
  public Post(String title, String body, String author, Date regDate) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.regDate = regDate;
  }
}
