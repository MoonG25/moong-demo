package com.moonground.repository.airpusan;

import com.moonground.domain.airpusan.SearchRq;
import com.moonground.domain.airpusan.SearchRs;
import java.io.IOException;

public interface DataLoader {
  SearchRs getSearchKeyRs(SearchRq rq) throws IOException;
}
