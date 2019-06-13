package com.moonground.service;

import com.moonground.domain.tway.SearchAvailabilityReq;
import com.moonground.domain.tway.SearchRq;
import com.moonground.repository.tway.DataLoader;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TwayServiceImpl implements TwayService {

  @Autowired
  private DataLoader dataLoader;

  @Override
  public SearchAvailabilityReq search(SearchRq rq) {
    try {
      return dataLoader.getSearchKeyRs(rq);
    } catch (IOException e) {

    }
    return null;
  }
}
