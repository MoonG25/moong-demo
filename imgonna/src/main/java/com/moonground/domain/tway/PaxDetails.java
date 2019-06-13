package com.moonground.domain.tway;

import lombok.Data;

@Data
public class PaxDetails {

  private String groupLeader;
  private String groupName;
  private PaxDetails groupPaxDetails;
  private String groupQuoteNumber;
  private String groupType;
  private String guestProfileId;
  private boolean hasGroupFormReceived;
  private String leaderFirstName;
  private String leaderLastName;
  private String leaderTitle;
  private String profileAlias;
  private String profileId;
  private boolean specialHandlingReqdIndicator;
}
