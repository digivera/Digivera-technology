import { useState, type ReactNode, type CSSProperties } from "react";
import { Controller, useForm, useWatch, type RegisterOptions, type SubmitHandler } from "react-hook-form";
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row, Spinner, ToggleButton } from "react-bootstrap";
import { BarChart3, BrainCircuit, CheckCircle2, Cloud, CloudCog, Code2, Lock, Mail, MoreHorizontal, Phone, Server, ShieldCheck, Smartphone, TrendingUp, User, UserRound, Users, type LucideIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ---------- Config ---------- */

const {
  VITE_EMAILJS_PUBLIC_KEY: PUBLIC_KEY,
  VITE_EMAILJS_SERVICE_ID: SERVICE_ID,
  VITE_EMAILJS_ADMIN_TEMPLATE_ID: ADMIN_TPL,
  VITE_EMAILJS_REPLY_TEMPLATE_ID: REPLY_TPL,
} = import.meta.env;

const IS_CONFIGURED = Boolean(PUBLIC_KEY && SERVICE_ID && ADMIN_TPL && REPLY_TPL);
const SUMMARY_MAX = 1000;

const SERVICES: { value: string; label: string; Icon: LucideIcon }[] = [
  { value: "ai", label: "AI & Generative AI Solutions", Icon: BrainCircuit },
  { value: "custom-software", label: "Custom Software Development", Icon: Code2 },
  { value: "saas", label: "SaaS Product Development", Icon: Cloud },
  { value: "cloud-devops", label: "Cloud & DevOps Services", Icon: CloudCog },
  { value: "cybersecurity", label: "Cybersecurity Services", Icon: ShieldCheck },
  { value: "it-infra", label: "IT Infrastructure & Support", Icon: Server },
  { value: "erp-crm", label: "ERP / CRM Implementation", Icon: Users },
  { value: "analytics", label: "Data Analytics & BI", Icon: BarChart3 },
  { value: "digital-transformation", label: "Digital Transformation Consulting", Icon: TrendingUp },
  { value: "staffing", label: "Staff Augmentation / IT Staffing", Icon: User },
  { value: "web-mobile", label: "Website & Mobile App Development", Icon: Smartphone },
  { value: "other", label: "Other", Icon: MoreHorizontal },
];

const SERVICE_LABELS = Object.fromEntries(SERVICES.map((s) => [s.value, s.label]));

type FormValues = {
  service: string;
  fullName: string;
  phone: string;
  email: string;
  summary: string;
  consent: boolean;
};

type TextFieldName = "fullName" | "phone" | "email";

const TEXT_FIELDS: {
  name: TextFieldName;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  Icon: LucideIcon;
  colProps: { xs: 12; md?: 6 };
  rules: RegisterOptions<FormValues, TextFieldName>;
}[] = [
    {
      name: "fullName",
      label: "Full name",
      type: "text",
      autoComplete: "name",
      placeholder: "e.g. Rahul Sharma",
      Icon: UserRound,
      colProps: { xs: 12 },
      rules: {
        required: "Enter your full name",
        minLength: { value: 2, message: "Name is too short" },
      },
    },
    {
      name: "phone",
      label: "Phone number",
      type: "tel",
      autoComplete: "tel",
      placeholder: "+91 98765 43210",
      Icon: Phone,
      colProps: { xs: 12, md: 6 },
      rules: {
        required: "Enter your phone number",
        pattern: { value: /^\+?[\d\s-]{10,15}$/, message: "Enter a valid phone number" },
      },
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      autoComplete: "email",
      placeholder: "you@example.com",
      Icon: Mail,
      colProps: { xs: 12, md: 6 },
      rules: {
        required: "Enter your email address",
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
      },
    },
  ];

const NEXT_STEPS = [
  "We read your request and match it to the right team.",
  "We call or email you to understand your goals.",
  "You receive a clear proposal with scope and timeline.",
];

// Lets us pass CSS custom properties (--i, --s) without TS complaints
const cssVar = (vars: Record<string, number>) => vars as unknown as CSSProperties;

/* ---------- Small presentational helpers ---------- */

const SectionTitle = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="fs-6 fw-semibold mb-3">
    {children}
  </h2>
);

const Required = () => (<span className="text-danger ms-1" aria-hidden="true">*</span>);

/* ---------- Component ---------- */

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      service: "",
      fullName: "",
      phone: "",
      email: "",
      summary: "",
      consent: false,
    },
  });

  const summaryLength = useWatch({ control, name: "summary" })?.length ?? 0;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setServerError(null);

    if (!IS_CONFIGURED) {
      console.error("EmailJS environment variables are missing.");
      setServerError("The form is unavailable right now. Please email us directly.");
      return;
    }

    const params = {
      service: SERVICE_LABELS[data.service] ?? data.service,
      full_name: data.fullName.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      summary: data.summary.trim(),
      consent: data.consent ? "Yes" : "No",
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };
    const options = { publicKey: PUBLIC_KEY };

    try {
      // 1) Admin notification must succeed
      await emailjs.send(SERVICE_ID, ADMIN_TPL, params, options);

      // 2) Auto-reply is best-effort and doesn't block the UI
      emailjs
        .send(SERVICE_ID, REPLY_TPL, params, options)
        .catch((err) => console.error("Auto-reply failed:", err));

      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setServerError("We couldn't send your request. Try again, or email us directly.");
    }
  };

  return (
    <section className="bg-body-tertiary py-4 py-md-5 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} xl={11} xxl={12}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
              <Row className="g-0">
                {/* ---------- Brand panel ---------- */}
                <Col lg={4} className="brand-panel text-white">
                  <div className="p-4 p-md-5 h-100 d-flex flex-column">
                    <p className="brand-reveal fw-semibold mb-1 opacity-75" style={cssVar({ "--i": 0 })}>
                      DigiVera Technologies
                    </p>

                    <h1 className="brand-reveal display-6 fw-bold lh-sm mb-3" style={cssVar({ "--i": 1 })}>
                      Request a consultation
                    </h1>

                    <p className="brand-reveal mb-4 opacity-90" style={cssVar({ "--i": 2 })}>
                      Innovative IT solutions. Intelligent automation. Real business impact.
                    </p>

                    <div className="mt-auto d-none d-lg-block">
                      <h2 className="brand-reveal fs-6 fw-semibold mb-3" style={cssVar({ "--i": 3 })}>
                        What happens next
                      </h2>

                      <ol className="brand-steps mb-4 d-grid gap-3">
                        {NEXT_STEPS.map((step, i) => (
                          <li key={step} className="brand-reveal small opacity-90" style={cssVar({ "--i": 4 + i, "--s": i })} >
                            {step}
                          </li>
                        ))}
                      </ol>

                      <div className="brand-reveal d-flex align-items-center gap-2 small opacity-75 pt-3 border-top border-white border-opacity-25" style={cssVar({ "--i": 7 })} >
                        <Lock size={14} aria-hidden="true" />
                        <span>Your details are never shared with third parties.</span>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* ---------- Form panel ---------- */}
                <Col lg={8} className="bg-body">
                  <div className="p-4 p-md-5">
                    {submitted ? (
                      <div className="text-center py-5" role="status">
                        <CheckCircle2 size={56} strokeWidth={1.5} className="text-success mb-3" aria-hidden="true" />
                        <h2 className="h3 fw-bold mb-2">Request received</h2>
                        <p className="text-body-secondary mx-auto mb-4" style={{ maxWidth: "26rem" }}>
                          Thanks for reaching out. We'll contact you shortly. A confirmation is on its way to your inbox.
                        </p>
                        <Button variant="outline-primary" onClick={() => setSubmitted(false)}>
                          Send another request
                        </Button>
                      </div>
                    ) : (
                      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {serverError && (
                          <Alert variant="danger" dismissible onClose={() => setServerError(null)} role="alert" > {serverError} </Alert>
                        )}

                        {/* Service selection */}
                        <Form.Group as="fieldset" className="mb-4">
                          <legend className="fs-6 fw-semibold mb-3" id="service-legend">
                            Which service do you need?
                            <Required />
                          </legend>

                          <Controller
                            name="service"
                            control={control}
                            rules={{ required: "Select a service" }}
                            render={({ field }) => (
                              <Row className="g-2" role="radiogroup" aria-labelledby="service-legend" aria-describedby={errors.service ? "service-error" : undefined} >
                                {SERVICES.map(({ value, label, Icon }) => {
                                  const selected = field.value === value;
                                  return (
                                    <Col xs={12} sm={6} xl={4} key={value}>
                                      <ToggleButton id={`svc-${value}`} type="radio" name={field.name} value={value} checked={selected} onChange={() => field.onChange(value)} onBlur={field.onBlur}
                                        variant={ selected ? "primary" : errors.service ? "outline-danger" : "outline-secondary" } className="w-100 h-100 d-flex align-items-center gap-2 text-start small py-2 px-3 position-relative" >
                                        <Icon size={22} strokeWidth={1.6} className="flex-shrink-0" aria-hidden="true" />
                                        <span className="flex-grow-1">{label}</span>
                                        {selected && (
                                          <CheckCircle2 size={16} className="flex-shrink-0" aria-hidden="true" />
                                        )}
                                      </ToggleButton>
                                    </Col>
                                  );
                                })}
                              </Row>
                            )}
                          />

                          {errors.service && (
                            <div id="service-error" className="invalid-feedback d-block mt-2" role="alert" >
                              {errors.service.message}
                            </div>
                          )}
                        </Form.Group>

                        <hr className="my-4" />

                        {/* Personal details */}
                        <SectionTitle>Your details</SectionTitle>
                        <Row className="g-3 mb-3">
                          {TEXT_FIELDS.map(
                            ({ name, label, type, autoComplete, placeholder, Icon, colProps, rules }) => (
                              <Col key={name} {...colProps}>
                                <Form.Group controlId={name}>
                                  <Form.Label className="small fw-semibold">
                                    {label}
                                    <Required />
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <InputGroup.Text className="bg-body-tertiary text-body-secondary">
                                      <Icon size={16} aria-hidden="true" />
                                    </InputGroup.Text>
                                    <Form.Control type={type} size="lg" autoComplete={autoComplete} placeholder={placeholder} isInvalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...register(name, rules)} />
                                    <Form.Control.Feedback type="invalid" id={`${name}-error`}>
                                      {errors[name]?.message}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            )
                          )}
                        </Row>

                        {/* Summary */}
                        <Form.Group controlId="summary" className="mb-4">
                          <div className="d-flex justify-content-between align-items-end">
                            <Form.Label className="small fw-semibold">
                              Project summary
                              <Required />
                            </Form.Label>
                            <span
                              className={`small mb-2 ${summaryLength > SUMMARY_MAX ? "text-danger" : "text-body-secondary"
                                }`}
                              aria-live="off"
                            >
                              {summaryLength}/{SUMMARY_MAX}
                            </span>
                          </div>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Describe your challenge, goals, timeline, and anything else we should know."
                            isInvalid={!!errors.summary}
                            aria-describedby={errors.summary ? "summary-error" : undefined}
                            {...register("summary", {
                              required: "Tell us a little about your project",
                              minLength: {
                                value: 10,
                                message: "Add a few more details (at least 10 characters)",
                              },
                              maxLength: {
                                value: SUMMARY_MAX,
                                message: `Keep it under ${SUMMARY_MAX} characters`,
                              },
                            })}
                          />
                          <Form.Control.Feedback type="invalid" id="summary-error">
                            {errors.summary?.message}
                          </Form.Control.Feedback>
                        </Form.Group>

                        {/* Consent */}
                        <Form.Group className="mb-4">
                          <Form.Check id="consent" type="checkbox" isInvalid={!!errors.consent} feedback={errors.consent?.message} feedbackType="invalid" aria-describedby={errors.consent ? "consent-error" : undefined} label="I agree to be contacted by DigiVera Technologies about my inquiry." className="small" {...register("consent", { required: "Agree to be contacted to continue" })} />
                        </Form.Group>

                        <Button type="submit" size="lg" className="w-100 fw-semibold" disabled={isSubmitting} >
                          {isSubmitting ? (
                            <>
                              <Spinner as="span" animation="border" size="sm" className="me-2" aria-hidden="true" />Sending...
                            </>
                          ) : (
                            "Request consultation"
                          )}
                        </Button>

                        <div className="d-flex d-lg-none justify-content-center align-items-center gap-2 text-body-secondary small mt-4">
                          <Lock size={13} aria-hidden="true" />
                          <span>Your details are never shared with third parties.</span>
                        </div>
                      </Form>
                    )}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}