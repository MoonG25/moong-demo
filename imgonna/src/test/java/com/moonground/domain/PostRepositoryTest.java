package com.moonground.domain;

import com.moonground.repository.PostRepository;
import java.util.Date;
import java.util.List;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostRepositoryTest {

  @Autowired
  PostRepository postRepository;

  @After
  public void cleanup() {
    postRepository.deleteAll();
  }

  @Test
  public void posts() {
    // given
    postRepository.save(Post.builder().author("moong@gmail.com").body("my first post").title("hi there").regDate(new Date()).build());

    // when
    List<Post> postList = postRepository.findAll();

    // then
    Post post = postList.get(0);
    assertThat(post.getTitle(), is("hi there"));
    assertThat(post.getBody(), is("my first post"));
  }

}
