package com.moonground.controller;

import com.moonground.domain.tway.SearchAvailabilityReq;
import com.moonground.domain.tway.SearchRq;
import com.moonground.service.TwayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tw")
public class TwayController {

  private static TwayService twayService;

  @Autowired
  public TwayController(TwayService twayService) {
    this.twayService = twayService;
  }

  @GetMapping(value = "/search/test", produces = "application/json;charset=utf-8")
  public SearchAvailabilityReq test() {
    SearchRq rq = new SearchRq();
    rq.setOrigin("ICN");
    rq.setDestination("CTS");
    rq.setOnwardDateStr("20180923");
    rq.setReturnDateStr("20180926");
    rq.setPointOfPurchase("KR");
    rq.setPaxTypeCountStr("1,0,0");
    rq.setToday("20180920");
    rq.setTravelType("RT");
    rq.setSearchType("byDate");
    rq.setCurrencyCode("KRW");
    rq.setDomesticYn("N");
    rq.setSearchAvailld("d01bc9ff1dd0cd297e5b286518a8e73fff5ba41e2ddedb5ebe258a15d692635f");
    rq.setBundleIndexOW("0");
    rq.setBundleAmountRT("0");
    rq.setRouteCls("AS");

    return twayService.search(rq);
  }
}
