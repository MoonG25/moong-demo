package com.moonground.domain.airpusan;

import lombok.Data;

@Data
public class DateMinFare {

  private String arrCity;
  private String cls;
  private String currency;
  private String depCity;
  private String depDate;
  private double price;
  private String soldOutYn;
  private String subCls;
}
