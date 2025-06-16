<script setup >
   const downloadICS = () => {
  const date = new Date(meetingTime.value);
  const endDate = new Date(date.getTime() + 60 * 60 * 1000); // +1 hour

  const formatICSDate = (d) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${eventPurpose.value || "Meeting"}`,
    `LOCATION:${locationPurpose.value || ""}`,
    `DTSTART:${formatICSDate(date)}`,
    `DTEND:${formatICSDate(endDate)}`,
    `DESCRIPTION:Meeting with team\n\n${messageContent.value}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "meeting.ics";
  a.click();
  URL.revokeObjectURL(url);
};

</script>

<template>
    
</template>