package com.moonground.repository.tway;

import com.moonground.domain.tway.SearchAvailabilityReq;
import com.moonground.domain.tway.SearchRq;
import java.io.IOException;

public interface DataLoader {
  SearchAvailabilityReq getSearchKeyRs(SearchRq rq) throws IOException;
}
