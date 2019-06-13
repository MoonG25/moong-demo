package com.moonground.service;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import com.google.gson.Gson;
import com.moonground.domain.airpusan.RqItinerary;
import com.moonground.domain.airpusan.SearchRq;
import com.moonground.domain.airpusan.SearchRs;
import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AirPusanTest {


  @Value("${link.airpusan.searchURL}")
  private String airPusanSearchURL;

  @Test
  public void search() throws IOException {
    // given
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

    // when
    Document document = Jsoup.connect(airPusanSearchURL)
        .header("Accept", "application/json, text/javascript, */*; q=0.01")
        .header("Accept-Encoding", "gzip, deflate, br")
        .header("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
        .header("Host", "www.airbusan.com")
        .timeout(60000)
        .requestBody("jsonString=" + new Gson().toJson(rq))
        .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36")
        .referrer("https://www.airbusan.com/web/individual/booking/international")
        .ignoreContentType(true)
        .post();
    SearchRs rs = new Gson().fromJson(document.text(), SearchRs.class);

    // then
    assertThat(rs.getParam().getListItinerary().get(0).getDepCity(), is("PUS"));
    assertThat(rs.getParam().getListItinerary().get(0).getArrCity(), is("KIX"));
  }

}
