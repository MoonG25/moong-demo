package com.moonground.service;

import com.moonground.domain.tway.SearchAvailabilityReq;
import com.moonground.domain.tway.SearchRq;

public interface TwayService {

  public SearchAvailabilityReq search(SearchRq rq);
}
