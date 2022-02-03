import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  height: 100%;
  margin-top: -20px;
  white-space: nowrap;

  thead {
    height: 85px;
    width: 100%;
    padding: 0 12px;
    border-bottom: 1px solid var(--position-staff);

    th {
      text-align: left;
      color: var(--position-staff);
      font-size: 14px;

      &:nth-child(1) {
        padding-left: 15px;
      }
    }
  }

  td {
    font-weight: 600;
    padding: 7px 0;
  }

  tbody {
    tr {
      border-bottom: 1px solid var(--position-staff) !important;

      :hover {
        background: var(--img-border);
        cursor: pointer;
        transition: all ease 0.3s;

        .position {
          color: #000;
        }
      }

      // td {
      //   text-align: center;
      // }
    }
  }

  .status {
    text-transform: capitalize;
  }

  .number-of-reports {
    padding: 0 60px;
  }

  .day-date {
    margin-left: 13px;
  }

  button {
    border: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    td,
    th {
      :nth-child(2) {
        padding-left: 10px;
      }

      :nth-child(3) {
        padding-left: 20px;
      }
    }

    height: 100%;
  }
`;
