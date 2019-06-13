package com.moonground.domain.airpusan;

import java.util.List;
import lombok.Data;

@Data
public class FareIntAvail {

  private String arrCity;
  private String arrCityName;
  private String depCity;
  private String depCityName;
  private String depDate;
  private String itinNo;
  private List<Flight> listFlight;
}
