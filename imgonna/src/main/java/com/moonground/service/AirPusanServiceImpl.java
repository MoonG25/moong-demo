package com.moonground.service;

import com.moonground.domain.airpusan.SearchRq;
import com.moonground.domain.airpusan.SearchRs;
import com.moonground.repository.airpusan.DataLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AirPusanServiceImpl implements AirPusanService {

  @Autowired
  private DataLoader dataLoader;

  @Override
  public SearchRs search(SearchRq rq) {
    try {
      return dataLoader.getSearchKeyRs(rq);
    } catch (Exception e) {

    }

    return null;
  }
}
