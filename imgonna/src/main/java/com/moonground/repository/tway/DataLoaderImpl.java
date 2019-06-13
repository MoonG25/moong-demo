package com.moonground.repository.tway;

import com.google.gson.Gson;
import com.moonground.domain.tway.SearchAvailabilityReq;
import com.moonground.domain.tway.SearchRq;
import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("twayLoader")
public class DataLoaderImpl implements DataLoader {

  @Value("${link.tway.searchURL}")
  private String twaySearchURL;

  @Override
  public SearchAvailabilityReq getSearchKeyRs(SearchRq rq) throws IOException {
    String payload = new Gson().toJson(rq);
    System.out.println(payload);

    Document document = Jsoup.connect(twaySearchURL)
        .header("Accept", "*/*")
        .header("Accept-Encoding", "gzip, deflate, br")
        .header("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7")
        .header("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
        .header("Host", "www.twayair.com")
        .timeout(60000)
        .requestBody(payload)
        .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36")
        .referrer("https://www.twayair.com/booking/availabilityList.do")
        .ignoreContentType(true)
        .post();

    System.out.println(document.text());

    SearchAvailabilityReq rs = new Gson().fromJson(document.text(), SearchAvailabilityReq.class);
    return rs;
  }
}
