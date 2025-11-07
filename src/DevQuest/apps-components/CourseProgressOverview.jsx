import { useMemo } from "react";
import { useSelector } from "react-redux";
import "../devquest-styles/CourseProgressOverview.css";

export default function CourseProgressOverview() {
  const courses = useSelector((state) => state.courses.courses || []);

  const stats = useMemo(() => {
    const totalCourses = courses.length;
    let totalSubmissions = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastSubmissionAt = null;

    const perCourse = courses.map((c) => {
      const submissions = c.submissions || [];
      totalSubmissions += submissions.length;
      let courseGradeSum = 0;
      submissions.forEach((s) => {
        if (typeof s.grade === "number") {
          gradeSum += s.grade;
          gradeCount += 1;
          courseGradeSum += s.grade;
        }
        if (s.submittedAt && (!lastSubmissionAt || s.submittedAt > lastSubmissionAt)) {
          lastSubmissionAt = s.submittedAt;
        }
      });
      const avg = submissions.length ? Math.round(courseGradeSum / submissions.length) : null;
      return {
        id: c.id,
        title: c.title,
        submissions: submissions.length,
        avgGrade: avg,
      };
    });

    const averageGrade = gradeCount ? Math.round(gradeSum / gradeCount) : null;

    return {
      totalCourses,
      totalSubmissions,
      averageGrade,
      lastSubmissionAt,
      perCourse,
    };
  }, [courses]);

  const formatDateTime = (ts) => {
    if (!ts) return "—";
    try {
      const d = new Date(ts);
      return d.toLocaleString();
    } catch {
      return "—";
    }
  };

  return (
    <div className="cpo">
      <div className="cpo-header">
        <h3><span className="highlight">Pokrok</span> v kurzu</h3>
        <div className="cpo-kpis">
          <div className="kpi"><span className="kpi-label">Kurzy</span><span className="kpi-value">{stats.totalCourses}</span></div>
          <div className="kpi"><span className="kpi-label">Odevzdání</span><span className="kpi-value">{stats.totalSubmissions}</span></div>
          <div className="kpi"><span className="kpi-label">Prům. známka</span><span className="kpi-value">{stats.averageGrade ?? "—"}</span></div>
          <div className="kpi"><span className="kpi-label">Poslední odevzdání</span><span className="kpi-value kpi-date">{formatDateTime(stats.lastSubmissionAt)}</span></div>
        </div>
      </div>

      <div className="cpo-list">
        {stats.perCourse.map((c) => (
          <div key={c.id} className="cpo-item">
            <div className="cpo-item-title">{c.title}</div>
            <div className="cpo-item-meta">
              <span className="meta">Odevzdání: <strong>{c.submissions}</strong></span>
              <span className="meta">Průměr: <strong>{c.avgGrade ?? "—"}</strong></span>
            </div>
          </div>
        ))}
        {stats.perCourse.length === 0 && (
          <div className="cpo-empty">Zatím nemáte žádné kurzy. Přidejte si první v sekci Úkoly.</div>
        )}
      </div>
    </div>
  );
}
