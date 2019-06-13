package com.moonground.domain.tway;

import java.util.List;
import lombok.Data;

@Data
public class SearchAvailabilityReq {

  private String agencyMember;
  private List<String> availIndexArr;
  private BestFareMap bestFareMap;
  private List<String> cellNumberArr;
  private String cntryCodeOfSubscriber;
  private List<String> cntryNoArr;
  private String currencyCode;
  private List<String> dateOfBirthArr;
  private String destination;
  private String destination2;
  private String domainIndex;
  private boolean domestic;
  private String domesticYn;
  private List<String> emailAddressArr;
  private List<String> fareIndexArr;
  private String fareTypse;
  private String fbaInitWeightOW;
  private String fbaInitWeightRT;
  private List<String> firstNameArr;
  private String firstNameOfSubscriber;
  private List<String> genderArr;
  private String genderOfSubscriber;
  private String groupName;
  private PaxDetails groupPaxDetails;
  private PnrComments groupPnrComments;
  private String groupType;
  private String groupYn;
  private List<String> guestIdArr;
  private List<String> guestTypeArr;
  private String isOcRoute;
  private String lang;
  private String lastDay;
  private List<String> lastNameArr;
  private String lastNameOfSubscriber;
  private String markSeatsReq;
  private String member;
  private List<String> nationalityArr;
  private List<String> oandDDetailsList;
  private List<String> onwardBundleArr;
  private String onwardBundleInfoStr;
  private Long onwardDate;
  private String onwardDateStr;
  private String onwardDayToSearch;
  private String onwardDtmString;
  private String orderByOW;
  private String orderByRT;
  private String origin;
  private String origin2;
  private int pageNumOW;
  private int pageNumRT;
  private List<String> parentArr;
  private List<PaxCountTypeData> paxCountTypeDataList;
  private List<String> paxTypeCountArr;
  private List<String> paxTypeCountStr;
  private String pnrData;
  private String pnrToken;
  private String pnrTypeCode;
  private String pointOfPurchase;
  private String promoCodeInfo;
  private String promotionCode;
  private PnrComments promotionCodePnrComments;
  private String recoMemId;
  private List<String> returnBundleArr;
  private String returnBundleInfoStr;
  private Long returnDate;
  private String returnDateStr;
  private String returnDayToSearch;
  private String returnDtmString;
  private String routeCls;
  private RouteInfo routeInfo;
  private int rownumOW;
  private int rownumRT;
  private String searchAvailId;
  private String searchEndDateStr;
  private String searchStartDateStrOW;
  private String searchStartDateStrRT;
  private String searchType;
  private String selectionBundleMealStrOW;
  private String selectionBundleMealStrRT;
  private String selectionBundleSeatStrOW;
  private String selectionBundleSeatStrRT;
  private String selectionExbgStrOW;
  private String selectionExbgStrRT;
  private String selectionMealStrOW;
  private String selectionMealStrRT;
  private String selectionSeatStrOW;
  private String selectionSeatStrRT;
  private String subTypeArr;
  private String today;
  private String travelDocCountryOfIssueArr;
  private String travelDocExpirydateStrArr;
  private String travelDocNumberArr;
  private String travelType;
}
