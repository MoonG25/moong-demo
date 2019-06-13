package com.moonground.domain.tway;

import lombok.Data;

@Data
public class SearchRq {

  private String origin;
  private String destination;
  private String origin1;
  private String destination1;
  private String origin2;
  private String destination2;
  private String onwardDateStr;
  private String returnDateStr;
  private String pointOfPurchase;
  private String paxTypeCountStr;
  private String today;
  private String travelType;
  private String orderByOW;
  private String orderByRT;
  private String fareBasisCodeOW;
  private String fareBasisCodeRT;
  private String searchType;
  private String arrivCntryCode;
  private String currencyCode;
  private String domesticYn;
  private String promotionCode;
  private String searchAvailld;
  private String segmentId;
  private String fareTypeOW;
  private String fareTypeRT;
  private String onwardFareSum;
  private String returnFareSum;
  private String segmentIdOW;
  private String segmentIdRT;
  private String bundleIndexOW;
  private String bundleAmountRT;
  private String selectedAvailValueOW;
  private String selectedAvailValueRT;
  private String routeCls;
}
