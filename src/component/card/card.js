import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.scss';

function WithHeaderExample() {
  return (
    <Card style={{height:100 +'%'}}>
      <Card.Body>
        <Card.Title>서울역사박물관 단체관람 </Card.Title>
        <Card.Text>
          <p>ㅇ신청대상 : 은평구민
              ㅇ 신청방법 : 은평구청 홈페이지 > 구민참여 > 체육시설 이용신청 > 예약현황 확인 > 예약하기
              ㅇ 신청시기 : 시설사용일기준 최소7일전 ~ 최대 현재일로부터 1달 이내
              ㅇ 이용시간 : 평일 2시간, 주말 2시간
              ㅇ 이용료(평일/2시간 기준) : 주간 49,500원, 야간 77,000원
              ㅇ 이용료(주말/2시간 기준) : 주간 77,000원, 야간 99,000원
          
          </p>
        </Card.Text>
        <div id='btn' >
          <Button style={{flexBasis:25 +'%', marginRight:0}}>예약하러 가기</Button>
          {/* heigh 길이가 짧아지면 옆으로 길어짐!  */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;