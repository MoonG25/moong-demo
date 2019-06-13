package com.moonground.domain.airpusan;

import java.util.List;
import lombok.Data;

@Data
public class Param {

  private String cono;  // 코인노래방 아님
  private String depTime;
  private String focYN;
  private String itinNo;
  private String lang;
  private List<RsItinerary> listItinerary;
  private String log;
  private int paxCountAd;
  private int paxCountCh;
  private int paxCountCorp;
  private int paxCountIn;
  private String site;
  private String tripType;
  private String uipAddr;
  private String usrNo;
  private String viewCurrency;
}
