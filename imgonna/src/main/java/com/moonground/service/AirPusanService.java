package com.moonground.service;

import com.moonground.domain.airpusan.SearchRq;
import com.moonground.domain.airpusan.SearchRs;

public interface AirPusanService {
  public SearchRs search(SearchRq rq);
}
