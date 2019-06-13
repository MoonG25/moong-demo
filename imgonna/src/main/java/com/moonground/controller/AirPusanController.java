package com.moonground.controller;

import com.moonground.domain.airpusan.RqItinerary;
import com.moonground.domain.airpusan.SearchRq;
import com.moonground.domain.airpusan.SearchRs;
import com.moonground.service.AirPusanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bx")
public class AirPusanController {

  private final AirPusanService airPusanService;

  @Autowired
  public AirPusanController(AirPusanService airPusanService) {
    this.airPusanService = airPusanService;
  }

  @GetMapping(value = "/search/test", produces = "application/json;charset=utf-8")
  @ResponseStatus(HttpStatus.OK)
  public SearchRs airPusanSearch(SearchRq param) {
    SearchRq rq = new SearchRq();
    rq.setBookingCateogry("Individual");
    rq.setFocYN("N");

    RqItinerary itinerary = new RqItinerary();
    itinerary.setItinNo("1");
    itinerary.setDepCity("PUS");
    itinerary.setArrCity("KIX");
    itinerary.setDepDate("2019-01-01");
    itinerary.setItineraryType("Going");
    rq.getListItinerary().add(itinerary);

    itinerary = new RqItinerary();
    itinerary.setItinNo("2");
    itinerary.setDepCity("KIX");
    itinerary.setArrCity("PUS");
    itinerary.setDepDate("2019-01-04");
    itinerary.setItineraryType("Return");
    rq.getListItinerary().add(itinerary);

    rq.setOpenReturnYN("");
    rq.setPaxCountAd(1);
    rq.setPaxCountCh(0);
    rq.setPaxCountCorp(0);
    rq.setPaxCountIn(0);
    rq.setTripType("RT");

    SearchRs rs = airPusanService.search(rq);

    return rs;
  }

  @GetMapping(value = "/search", produces = "application/json;charset=utf-8")
  public SearchRs apSearch(String depCity1, String arrCity1, String depDate1, String depCity2, String arrCity2, String depDate2, String tripType) {
    SearchRq rq = new SearchRq();
    rq.setBookingCateogry("Individual");
    rq.setFocYN("N");

    RqItinerary itinerary = new RqItinerary();
    itinerary.setItinNo("1");
    itinerary.setDepCity(depCity1);
    itinerary.setArrCity(arrCity1);
    itinerary.setDepDate(depDate1);
    itinerary.setItineraryType("Going");
    rq.getListItinerary().add(itinerary);

    itinerary = new RqItinerary();
    itinerary.setItinNo("2");
    itinerary.setDepCity(depCity2);
    itinerary.setArrCity(arrCity2);
    itinerary.setDepDate(depDate2);
    itinerary.setItineraryType("Return");
    rq.getListItinerary().add(itinerary);

    rq.setOpenReturnYN("");
    rq.setPaxCountAd(1);
    rq.setPaxCountCh(0);
    rq.setPaxCountCorp(0);
    rq.setPaxCountIn(0);
    rq.setTripType(tripType);

    SearchRs rs = airPusanService.search(rq);

    return rs;
  }
}
