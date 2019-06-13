package com.moonground.domain.airpusan;

import java.util.List;
import lombok.Data;

@Data
public class FareIntListMinFare {

  private String arrCity;
  private String depCity;
  private String itinNo;
  private List<DateMinFare> listDateMinFare;
}
