package com.moonground.domain.airpusan;

import lombok.Data;

@Data
public class RsItinerary {

  private String arrCity;
  private String depCity;
  private String depDate;
  private boolean empty;
}
