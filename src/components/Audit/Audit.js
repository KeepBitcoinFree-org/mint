import React from "react";
import { Row, Col, Card, Icon, Typography } from "antd";
import StyledAudit from "../Common/StyledPage";
const { Text, Title } = Typography;

export default () => {
  return (
    <StyledAudit>
      <Row justify="center" type="flex">
        <Col lg={10} span={24}>
          <Card
            className="audit"
            title={
              <h2>
                <Icon type="eye" theme="filled" /> Audit
              </h2>
            }
            bordered={true}
          >
            <Title level={4}>Never trust, always verify.</Title>
            <Text>
              <a
                href="https://github.com/KeepBitcoinFree-org/mint"
                rel="noopener noreferrer"
                target="_blank"
              >
                Check the open source code here.
              </a>
              <br />
            </Text>
            <br />
            <a href="http://localhost:3000/#/configure" rel="noopener noreferrer">
              <Text>Check and/or change the REST API in Configure.</Text>
            </a>
            <br />
            <br />
            <Text>
              <a
                href="https://github.com/KeepBitcoinFree-org/mint#running-locally"
                rel="noopener noreferrer"
                target="_blank"
              >
                Install, build and run SOURmint.cash locally.
              </a>
              <br />{" "}
            </Text>
            <br />
            <Text>
              Join our{" "}
              <a href="https://t.me/sourtoken" rel="noopener noreferrer" target="_blank">
                public telegram group
              </a>
              .
            </Text>
          </Card>
        </Col>
      </Row>
    </StyledAudit>
  );
};
