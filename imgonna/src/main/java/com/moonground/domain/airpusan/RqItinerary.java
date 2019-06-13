package com.moonground.domain.airpusan;

import lombok.Data;

@Data
public class RqItinerary {

  private String arrCity;
  private String depCity;
  private String depDate; // 2019-01-01
  private String itinNo;
  private String itineraryType;
}
