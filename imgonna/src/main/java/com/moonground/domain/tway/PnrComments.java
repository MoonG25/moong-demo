package com.moonground.domain.tway;

import lombok.Data;

@Data
public class PnrComments {

  private String commentAddedTime;
  private String commentAddedTimeStr;
  private String commentAddedUser;
  private String commentId;
  private CommentType commentType;
  private String commentTypeCode;
  private String commentValue;
  private String guestId;
  private String segmentId;
}
