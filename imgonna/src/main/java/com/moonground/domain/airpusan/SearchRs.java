package com.moonground.domain.airpusan;

import java.util.List;
import lombok.Data;

@Data
public class SearchRs {

  private boolean error;
  private String errorCode;
  private String errorDesc;
  private String errorInfo;
  private List<FareIntAvail> listFareIntAvail;
  private List<FareIntListMinFare> listFareIntListMinFare;
  private Param param;
  private PubTaxFuel pubTaxFuel;
}
