package com.moonground;

import com.moonground.config.SampleListener;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication application = new SpringApplication(Application.class);
    application.addListeners(new SampleListener());
    application.run(args);
  }
}
