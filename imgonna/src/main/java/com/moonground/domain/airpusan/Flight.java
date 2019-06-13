package com.moonground.domain.airpusan;

import java.util.List;
import lombok.Data;

@Data
public class Flight {

  private String arrDate;
  private String arrDay;
  private String arrTime;
  private String delayArrDate;
  private String delayArrTime;
  private String delayDepDate;
  private String delayDepTime;
  private String depDate;
  private String depDay;
  private String depTime;
  private String flightNo;
  private List<Cls> listCls;
}
