package com.moonground.domain.airpusan;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;

@Data
public class SearchRq {

  private String bookingCateogry;
  private String focYN;
  private List<RqItinerary> listItinerary = new ArrayList<>();
  private String openReturnYN;
  private int paxCountAd = 1;
  private int paxCountCh;
  private int paxCountCorp;
  private int paxCountIn;
  private String tripType;
}
