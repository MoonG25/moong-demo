package com.moonground.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Size(min = 5, message = "5자 이상 써주세요")
  private String comment;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "post_id", referencedColumnName = "id")
  private Post post;
}
