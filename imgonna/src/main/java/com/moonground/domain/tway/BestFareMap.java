package com.moonground.domain.tway;

import java.util.List;
import lombok.Data;

@Data
public class BestFareMap {

  private List<BestFare> onwardBestFaresWeek;
  private List<BestFare> returnBestFaresWeek;
}
