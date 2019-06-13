package com.moonground.repository.airpusan;

import com.google.gson.Gson;
import com.moonground.domain.airpusan.SearchRq;
import com.moonground.domain.airpusan.SearchRs;
import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("airpusanLoader")
public class DataLoaderImpl implements DataLoader {

  @Value("${link.airpusan.searchURL}")
  private String airPusanSearchURL;

  @Override
  public SearchRs getSearchKeyRs(SearchRq rq) throws IOException {
    String payload = new Gson().toJson(rq);

    Document document = Jsoup.connect(airPusanSearchURL)
        .header("Accept", "application/json, text/javascript, */*; q=0.01")
        .header("Accept-Encoding", "gzip, deflate, br")
        .header("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
        .header("Host", "www.airbusan.com")
        .timeout(60000)
        .requestBody("jsonString=" + payload)
        .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36")
        .referrer("https://www.airbusan.com/web/individual/booking/international")
        .ignoreContentType(true)
        .post();

    String jsonString = document.text();
    System.out.println(jsonString);
    System.out.println("===========================================");
    SearchRs rs = new Gson().fromJson(jsonString, SearchRs.class);
    System.out.println("AFTER");
    if (rs == null) {
      System.out.println("Search Response is NULL");
    }

    return rs;
  }
}
